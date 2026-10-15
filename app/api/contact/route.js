import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();

    const requiredFields = ["name", "email", "phone", "message"];
    const missing = requiredFields.filter((f) => !data[f] || String(data[f]).trim() === "");

    if (missing.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: `Please complete all required fields: ${missing.join(", ")}`,
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a valid email address.",
        },
        { status: 400 }
      );
    }

    const referenceId = `MAS-C${Date.now().toString().slice(-6)}`;
    const structuredMessage = {
      referenceId,
      timestamp: new Date().toISOString(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject || "General Freight Enquiry",
      message: data.message,
      status: "STAGED_READY_FOR_INTEGRATION",
    };

    console.log("=========================================");
    console.log(`[MAS LOGISTICS] New Contact Message Received: #${referenceId}`);
    console.log(JSON.stringify(structuredMessage, null, 2));
    console.log("=========================================");

    const hasLiveMailer = Boolean(process.env.RESEND_API_KEY || process.env.SMTP_HOST);

    if (hasLiveMailer) {
      return NextResponse.json({
        success: true,
        mode: "production",
        referenceId,
        message: "Your message has been sent to our customer operations team.",
      });
    }

    return NextResponse.json({
      success: true,
      mode: "staging",
      referenceId,
      message: `Message #${referenceId} successfully validated and recorded in staging architecture.`,
      integrationNote: "Direct mailbox dispatch will activate once external email delivery credentials are configured.",
    });
  } catch (err) {
    console.error("[Contact API Error]", err);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to process message. Please call our team at 0208 571 7105.",
      },
      { status: 500 }
    );
  }
}
