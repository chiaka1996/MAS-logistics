export default function sitemap() {
  const baseUrl = "https://www.maslogistics.co.uk";

  const routes = [
    "",
    "/about",
    "/services",
    "/services/customs-clearance",
    "/services/road-freight",
    "/services/air-freight",
    "/services/sea-freight",
    "/services/bonded-warehousing",
    "/services/cold-storage",
    "/services/cargo-handling",
    "/services/specialist-cargo",
    "/services/repatriation",
    "/ports-we-serve",
    "/quote",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.9 : 0.7,
  }));
}
