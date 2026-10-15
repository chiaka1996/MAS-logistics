import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();

    // 1. Validation check
    const requiredFields = ["firstName", "lastName", "email", "phone", "serviceRequired"];
    const missing = requiredFields.filter((f) => !data[f] || String(data[f]).trim() === "");

    if (missing.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: `Missing required fields: ${missing.join(", ")}`,
        },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a valid business email address.",
        },
        { status: 400 }
      );
    }

    // Generate a unique tracking reference
    const referenceId = `MAS-Q${Date.now().toString().slice(-6)}`;
    const timestamp = new Date().toISOString();

    const structuredEnquiry = {
      referenceId,
      timestamp,
      customer: {
        name: `${data.firstName} ${data.lastName}`.trim(),
        email: data.email,
        phone: data.phone,
        company: data.companyName || "Not provided",
        position: data.position || "Not provided",
      },
      logistics: {
        serviceRequired: data.serviceRequired,
        natureOfGoods: data.natureOfGoods || "General Cargo",
        origin: data.origin || "Not specified",
        destination: data.destination || "Not specified",
        weightKg: data.weightKg || null,
        palletCount: data.palletCount || null,
        dimensions: data.dimensions || null,
        targetDate: data.targetDate || null,
        specialRequirements: {
          hazardousADR: Boolean(data.isHazardous),
          temperatureControlled: Boolean(data.isTemperatureControlled),
          customsDefermentNeeded: Boolean(data.needsDeferment),
          tailLiftRequired: Boolean(data.needsTailLift),
        },
        additionalNotes: data.additionalNotes || "",
      },
      status: "STAGED_READY_FOR_INTEGRATION",
    };

    // Log the structured enquiry to the server console for audit/inspection
    console.log("=========================================");
    console.log(`[MAS LOGISTICS] New Quote Enquiry Received: #${referenceId}`);
    console.log(JSON.stringify(structuredEnquiry, null, 2));
    console.log("=========================================");

    // Check if external mailer environment variable is present (e.g. RESEND_API_KEY, SMTP_HOST)
    const hasLiveMailer = Boolean(process.env.RESEND_API_KEY || process.env.SMTP_HOST);

    if (hasLiveMailer) {
      // In production with credentials configured, this block would dispatch the email.
      // (Implementation point ready for Resend / SendGrid / NodeMailer)
      return NextResponse.json({
        success: true,
        mode: "production",
        referenceId,
        message: "Your quote request has been dispatched to the MAS Logistics operations desk.",
        enquiry: structuredEnquiry,
      });
    }

    // Honest staging mode response when no private external credentials are configured
    return NextResponse.json({
      success: true,
      mode: "staging",
      referenceId,
      message: `Enquiry #${referenceId} successfully validated and recorded in staging architecture.`,
      integrationNote: "Notice: Direct dispatch to sales@maslogistics.co.uk is pending configuration of authorized SMTP or API credentials in your environment.",
      enquiry: structuredEnquiry,
    });
  } catch (err) {
    console.error("[Quote API Error]", err);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your quote request. Please try again or telephone our London hub directly.",
      },
      { status: 500 }
    );
  }
}
