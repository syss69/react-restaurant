"use client";

import { useEffect, useMemo, useState } from "react";

type FormData = {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  comment: string;
};


// ---------- CONFIG — МЕНЯЕТСЯ ПОД РЕСТОРАН ----------

const STEP_MIN = 15;

const schedule: {
        lunch: [number, number];
        dinner: [number, number];
    } = {
        lunch: [12, 14],
        dinner: [19, 22],
};

// ----------------------------------------------------


function generateSlots(start: number, end: number, step = STEP_MIN) {
  const slots: string[] = [];

  for (let h = start; h < end; h++) {
    for (let m = 0; m < 60; m += step) {
      const hh = String(h).padStart(2, "0");
      const mm = String(m).padStart(2, "0");
      slots.push(`${hh}:${mm}`);
    }
  }

  return slots;
}


function getSlotsForDate(dateStr: string) {
  if (!dateStr) return [];

  const d = new Date(dateStr);
  const day = d.getDay(); // 0 вс — 1 пн — 6 сб

  if (day === 1) return [];

    return [
      ...generateSlots(...schedule.lunch),
      ...generateSlots(...schedule.dinner),
    ];
}


export default function ReservationForm() {
  const [data, setData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: 2,
    comment: "",
  });

  const [slots, setSlots] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle"|"sending"|"ok">("idle");
  const [blockedDates, setBlockedDates] = useState<Set<string>>(new Set());
  const [reservationsGloballyDisabled, setReservationsGloballyDisabled] =
    useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/blocked-dates")
      .then((r) => r.json())
      .then((json: { dates?: unknown; reservationsGloballyDisabled?: unknown }) => {
        if (cancelled) return;
        const list = Array.isArray(json.dates)
          ? json.dates.filter((d): d is string => typeof d === "string")
          : [];
        setBlockedDates(new Set(list));
        setReservationsGloballyDisabled(json.reservationsGloballyDisabled === true);
      })
      .catch(() => {
        if (!cancelled) {
          setBlockedDates(new Set());
          setReservationsGloballyDisabled(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const dateBlocked =
    reservationsGloballyDisabled ||
    (Boolean(data.date) && blockedDates.has(data.date));

  // ---------- обновление слотов при смене даты ----------

  useEffect(() => {
    if (dateBlocked) {
      setSlots([]);
      setData((prev) => ({ ...prev, time: "" }));
      return;
    }
    const s = getSlotsForDate(data.date);
    setSlots(s);
    setData((prev) => ({ ...prev, time: "" }));
  }, [data.date, dateBlocked]);


  // ---------- обработчики ----------

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;

    setData(prev => ({
      ...prev,
      [name]: name === "guests" ? Number(value) : value,
    }));
  }


  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (reservationsGloballyDisabled) return;
    if (!data.date || blockedDates.has(data.date)) return;
    setStatus("sending");

    console.log("Reservation:", data);

    // 👉 тут позже будет API/email
    await new Promise(r => setTimeout(r, 800));

    setStatus("ok");
  }


  const today = useMemo(
    () => new Date().toISOString().split("T")[0],
    []
  );


  // ---------- UI ----------

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-sm p-6 md:p-8 space-y-5"
    >

      {reservationsGloballyDisabled && (
        <p className="text-sm text-amber-900 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
          Les réservations en ligne sont momentanément fermées. Merci de nous
          appeler pour toute demande de table.
        </p>
      )}

      {/* Name */}
      <Field label="Nom">
        <input
          name="name"
          required
          value={data.name}
          onChange={handleChange}
          disabled={reservationsGloballyDisabled}
          className={inputCls}
        />
      </Field>


      {/* Phone */}
      <Field label="Téléphone">
        <input
          name="phone"
          required
          value={data.phone}
          onChange={handleChange}
          disabled={reservationsGloballyDisabled}
          className={inputCls}
        />
      </Field>


      {/* Email */}
      <Field label="Email">
        <input
          type="email"
          name="email"
          required
          value={data.email}
          onChange={handleChange}
          disabled={reservationsGloballyDisabled}
          className={inputCls}
        />
      </Field>


      {/* Date + Time */}
      <div className="grid sm:grid-cols-2 gap-4">

        <Field label="Date">
          <input
            type="date"
            name="date"
            required
            min={today}
            value={data.date}
            onChange={handleChange}
            disabled={reservationsGloballyDisabled}
            className={inputCls}
          />
        </Field>


        <Field label="Heure">
          <select
            name="time"
            required
            value={data.time}
            onChange={handleChange}
            disabled={
              reservationsGloballyDisabled || !slots.length || dateBlocked
            }
            className={inputCls}
          >
            <option value="">
              {reservationsGloballyDisabled
                ? "Indisponible"
                : dateBlocked
                ? "Indisponible"
                : slots.length
                  ? "Choisir l'heure"
                  : "Fermé ce jour"}
            </option>

            {slots.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </Field>

      </div>

      {dateBlocked && !reservationsGloballyDisabled && (
        <p className="text-sm text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
          Ce jour n’est pas disponible à la réservation en ligne. Choisissez
          une autre date ou contactez-nous par téléphone.
        </p>
      )}


      {/* Guests */}
      <Field label="Nombre de personnes">
        <select
          name="guests"
          value={data.guests}
          onChange={handleChange}
          disabled={reservationsGloballyDisabled}
          className={inputCls}
        >
          {[1,2,3,4,5,6,7,8,9,10,12,15,20].map(n => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </Field>


      {/* Comment */}
      <Field label="Commentaire">
        <textarea
          name="comment"
          rows={3}
          value={data.comment}
          onChange={handleChange}
          disabled={reservationsGloballyDisabled}
          className={inputCls}
        />
      </Field>


      {/* Submit */}
      <button
        disabled={
          status === "sending" || dateBlocked || reservationsGloballyDisabled
        }
        className="w-full bg-black text-white py-3 rounded-md hover:opacity-90 transition disabled:opacity-50"
      >
        {status === "sending" ? "Envoi..." : "Réserver une table"}
      </button>


      {status === "ok" && (
        <div className="text-green-600 text-sm text-center pt-2">
          ✅ Demande envoyée — confirmation bientôt
        </div>
      )}

    </form>
  );
}


// ---------- helpers UI ----------

const inputCls =
  "w-full border rounded-md px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-black/20 ";


function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm mb-1">{label}</label>
      {children}
    </div>
  );
}
