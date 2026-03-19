import React from "react";
import { Card, Badge, Button } from "../components/common/ui";
import { Link } from "react-router-dom";
import PlatformMascot from "../components/common/PlatformMascot";
import { useLanguage } from "../context/LanguageContext";

const saleUnits = [
  {
    slug: "ap-801",
    name: "UNIT AP-801",
    category: "BEACHFRONT APARTMENT",
    price: "$450,000",
    bedrooms: 2,
    bathrooms: 2,
    sqm: 118,
    sqft: 1270,
    parking: 1,
    location: "PLAYA ESCONDIDA RESORT & MARINA",
    view: "OCEAN VIEW",
    status: "FOR SALE",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    description: "Premium beachfront residence with resort access, ideal for lifestyle ownership and long-term value.",
  },
  {
    slug: "villa-12",
    name: "VILLA 12",
    category: "LUXURY VILLA",
    price: "$895,000",
    bedrooms: 4,
    bathrooms: 4,
    sqm: 286,
    sqft: 3078,
    parking: 2,
    location: "PLAYA ESCONDIDA RESORT & MARINA",
    view: "GARDEN + OCEAN",
    status: "FOR SALE",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    description: "Spacious villa designed for premium family ownership, entertaining, and resort living.",
  },
  {
    slug: "ph-3",
    name: "MARINA PENTHOUSE PH-3",
    category: "PENTHOUSE",
    price: "$1,250,000",
    bedrooms: 4,
    bathrooms: 4.5,
    sqm: 320,
    sqft: 3444,
    parking: 2,
    location: "PLAYA ESCONDIDA RESORT & MARINA",
    view: "PANORAMIC OCEAN + MARINA",
    status: "FOR SALE",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    description: "Top-tier penthouse with expansive terraces, panoramic views, and signature luxury finishes.",
  }
];

function SaleInfoPill({ label, value }) {
  return (
    <div className="info-pill">
      <div className="label">{label}</div>
      <div className="value">{value}</div>
    </div>
  );
}

export default function OurListingsPage() {
  const { language } = useLanguage();

  return (
    <section className="section">
      <div className="container">
        <div className="price-row" style={{ gap: "1rem", flexWrap: "wrap", marginBottom: "1rem" }}>
          <div className="section-heading" style={{ marginBottom: 0 }}>
            <div className="muted" style={{ letterSpacing: ".16em", textTransform: "uppercase", fontWeight: 800, fontSize: 13 }}>
              {language === "es" ? "NUESTROS LISTADOS" : "OUR LISTINGS"}
            </div>
            <h1 className="page-title" style={{ marginBottom: ".5rem" }}>
              {language === "es" ? "UNIDADES EN VENTA" : "REAL ESTATE UNITS FOR SALE"}
            </h1>
            <div className="divider" />
            <p className="muted" style={{ maxWidth: 880, lineHeight: 1.8, marginTop: "1rem" }}>
              {language === "es"
                ? "Esta sección está dedicada únicamente a listados inmobiliarios en venta. No incluye calendarios de renta. Cada unidad muestra la información esencial de bienes raíces para compradores."
                : "This section is dedicated only to real estate listings for sale. It does not include rental calendars. Each unit shows the key property details a buyer expects."}
            </p>
          </div>
          <PlatformMascot size="small" caption={language === "es" ? "VENTAS DIRECTAS" : "DIRECT SALES"} />
        </div>

        <div className="listing-grid">
          {saleUnits.map((unit) => (
            <Card key={unit.slug}>
              <div className="property-card">
                <img src={unit.image} alt={unit.name} />
                <div className="price-row" style={{ marginTop: 14, flexWrap: "wrap" }}>
                  <div className="inline" style={{ flexWrap: "wrap", gap: ".5rem" }}>
                    <Badge>{unit.category}</Badge>
                    <Badge>{unit.status}</Badge>
                    <Badge>{unit.view}</Badge>
                  </div>
                </div>

                <h3 style={{ margin: "16px 0 8px", fontSize: "1.35rem" }}>{unit.name}</h3>
                <div className="muted">{unit.location}</div>
                <p className="muted" style={{ lineHeight: 1.7 }}>{unit.description}</p>

                <div className="listing-info-grid">
                  <SaleInfoPill label={language === "es" ? "HABITACIONES" : "BEDROOMS"} value={unit.bedrooms} />
                  <SaleInfoPill label={language === "es" ? "BAÑOS" : "BATHROOMS"} value={unit.bathrooms} />
                  <SaleInfoPill label={language === "es" ? "M²" : "SQ METERS"} value={unit.sqm} />
                  <SaleInfoPill label={language === "es" ? "PIES²" : "SQ FEET"} value={unit.sqft} />
                  <SaleInfoPill label={language === "es" ? "ESTACIONAMIENTOS" : "PARKING"} value={unit.parking} />
                  <SaleInfoPill label={language === "es" ? "PRECIO" : "SALE PRICE"} value={unit.price} />
                </div>

                <div className="price-row" style={{ marginTop: 18, alignItems: "flex-end" }}>
                  <div>
                    <div style={{ fontSize: 30, fontWeight: 900 }}>{unit.price}</div>
                    <div className="muted" style={{ fontSize: 12 }}>
                      {language === "es" ? "PRECIO DE VENTA" : "FOR SALE"}
                    </div>
                  </div>
                  <div className="inline" style={{ gap: ".65rem", flexWrap: "wrap" }}>
                    <Link to="/contact"><Button variant="light">{language === "es" ? "SOLICITAR INFO" : "REQUEST INFO"}</Button></Link>
                    <a href="tel:+50766164212"><Button>{language === "es" ? "LLAMAR AHORA" : "CALL NOW"}</Button></a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
