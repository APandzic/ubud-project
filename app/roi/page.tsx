"use client";

import { useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { useRoi } from "@/app/roi-context";

const BASE_ROOMS = 30;
const GUESTS_PER_ROOM = 2;
const NIGHTS = 365;

export default function Page() {
  const { adr, setAdr, totalRooms, setTotalRooms, occupancy, setOccupancy, services, updateService, reset } = useRoi();

  const results = useMemo(() => {
    const occ = occupancy / 100;
    const totalA = totalRooms * adr * occ * NIGHTS;
    const roomRevB = BASE_ROOMS * adr * occ * NIGHTS;
    const guestNights = BASE_ROOMS * occ * NIGHTS * GUESTS_PER_ROOM;
    const serviceRevs = services.map((s) => guestNights * (s.attach / 100) * s.price);
    const ancillaryRev = serviceRevs.reduce((a, b) => a + b, 0);
    const totalB = roomRevB + ancillaryRev;
    return { totalA, totalB, serviceRevs, diff: totalB - totalA, upliftPct: (totalB / totalA - 1) * 100 };
  }, [adr, totalRooms, occupancy, services]);

  const fmt = (n: number) =>
    "IDR " + Math.round(n).toLocaleString("id-ID");

  const fmtAdr = (n: number) =>
    Math.round(n).toLocaleString("id-ID");

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <div className="max-w-3xl mx-auto px-4 py-8 md:px-8 md:py-12">

        {/* HEADER */}
        <div className="mb-10 pb-10 border-b border-neutral-200">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-neutral-700 mb-4">Investment Memo · Ubud</p>
              <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 leading-tight tracking-tight mb-4">
                Build more rooms or invest in facilities?
              </h1>
              <p className="text-base text-neutral-700 leading-relaxed max-w-xl">
                The hotel already has 30 rooms. Instead of adding more, invest the same space into a spa,
                restaurant, and bar, plus included wellness facilities that make guests want to stay on-site
                rather than drive into Ubud.
              </p>
            </div>
            <button
              onClick={reset}
              className="shrink-0 text-sm text-neutral-700 underline underline-offset-2 hover:text-neutral-900 transition-colors mt-1"
            >
              Reset
            </button>
          </div>
        </div>

        {/* BASE ASSUMPTIONS */}
        <div className="mb-10">
          <p className="text-sm text-neutral-700 mb-5">Base assumptions</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <span className="text-sm text-neutral-700">Total rooms</span>
                <span className="font-mono text-sm font-medium text-neutral-900">{totalRooms} rooms</span>
              </div>
              <Slider min={30} max={34} step={1} value={[totalRooms]} onValueChange={(v) => setTotalRooms(v[0])} />
            </div>
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <span className="text-sm text-neutral-700">Occupancy</span>
                <span className="font-mono text-sm font-medium text-neutral-900">{occupancy}%</span>
              </div>
              <Slider min={40} max={95} step={1} value={[occupancy]} onValueChange={(v) => setOccupancy(v[0])} />
            </div>
            <div className="md:col-span-2">
              <div className="flex justify-between items-baseline mb-3">
                <span className="text-sm text-neutral-700">Average room rate (IDR per night)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-neutral-700 shrink-0">IDR</span>
                <input
                  type="number"
                  value={adr}
                  onChange={(e) => {
                    const val = parseInt(e.target.value.replace(/\D/g, ""), 10);
                    if (!isNaN(val) && val > 0) setAdr(val);
                  }}
                  className="w-full font-mono text-sm text-neutral-900 border border-neutral-200 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-neutral-400"
                  placeholder="1700000"
                  step={100000}
                />
              </div>
              <p className="text-xs text-neutral-700 mt-2">
                Current: IDR {fmtAdr(adr)} per night · 2 guests per room · 365 nights
              </p>
            </div>
          </div>
        </div>

        {/* SCENARIOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <Card>
            <CardContent className="p-7">
              <p className="text-sm text-neutral-700 font-bold mb-3">Scenario A</p>
              <p className="text-sm font-medium text-neutral-700 mb-6">
                {totalRooms === 30 ? "Keep 30 rooms, no new facilities" : `Expand to ${totalRooms} rooms`}
              </p>
              <p className="font-mono text-3xl font-medium text-neutral-900 mb-1">{fmt(results.totalA)}</p>
              <p className="text-xs text-neutral-700">Annual revenue</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-7">
              <p className="text-sm text-neutral-700 font-bold mb-3">Scenario B</p>
              <p className="text-sm font-medium text-neutral-700 mb-6">30 rooms + spa, restaurant & bar</p>
              <p className="font-mono text-3xl font-medium text-neutral-900 mb-1">{fmt(results.totalB)}</p>
              <p className="text-sm text-neutral-700">Annual revenue</p>
            </CardContent>
          </Card>
        </div>

        {/* FACILITIES */}
        <div className="mb-10 p-5 bg-neutral-50 rounded-lg border border-neutral-200">
          <p className="text-sm text-neutral-700 mb-2">Included · free access</p>
          <p className="text-sm text-neutral-700">Sauna · Ice bath · Gym · Pool · Yoga deck</p>
          <p className="text-xs text-neutral-700 mt-1.5">Guided sessions sold separately, see below.</p>
        </div>

        {/* REVENUE DRIVERS */}
        <div className="mb-10">
          <p className="text-sm text-neutral-700 mb-1">Revenue drivers, scenario B</p>
          <p className="text-xs text-neutral-700 mb-6">
            Adjust guest attachment rate and average spend. Prices reflect Ubud market rates.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {services.map((s, i) => (
              <Card key={s.key}>
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-sm font-medium text-neutral-900">{s.name}</p>
                      <p className="text-xs text-neutral-700 mt-0.5">{s.note}</p>
                    </div>
                    <p className="font-mono text-sm font-medium text-neutral-900 shrink-0 ml-3">
                      {fmt(results.serviceRevs[i])}<span className="text-neutral-700 font-normal text-xs">/yr</span>
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-5 pt-3 border-t border-neutral-100">
                    <div>
                      <div className="flex justify-between text-xs text-neutral-700 mb-2">
                        <span>Guests who buy</span>
                        <span className="font-mono">{s.attach}%</span>
                      </div>
                      <Slider min={0} max={100} step={1} value={[s.attach]} onValueChange={(v) => updateService(i, { attach: v[0] })} />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-neutral-700 mb-2">
                        <span>Avg spend</span>
                        <span className="font-mono">{fmtAdr(s.price)}</span>
                      </div>
                      <Slider min={50_000} max={s.maxPrice} step={50_000} value={[s.price]} onValueChange={(v) => updateService(i, { price: v[0] })} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className="border-t border-neutral-200 pt-8">
          <p className="text-sm text-neutral-700 mb-4">Bottom line</p>
          <div className="flex items-baseline gap-3 mb-4">
            <p className={`font-mono text-4xl font-medium ${results.diff > 0 ? "text-neutral-900" : "text-neutral-700"}`}>
              {results.diff > 0 ? "+" : ""}{fmt(results.diff)}
            </p>
            <p className="text-sm text-neutral-700">per year</p>
          </div>
          <p className="text-sm text-neutral-700 leading-relaxed max-w-xl">
            {totalRooms} rooms at IDR {fmtAdr(adr)}/night generates{" "}
            <span className="font-mono text-neutral-900">{fmt(results.totalA)}</span> per year.
            Keep 30 rooms and add spa, restaurant, and bar, the same property generates{" "}
            <span className="font-mono text-neutral-900">{fmt(results.totalB)}</span>.
            That is{" "}
            <span className="font-mono text-neutral-900">
              {results.upliftPct > 0 ? "+" : ""}{results.upliftPct.toFixed(0)}%
            </span>{" "}
            more revenue from guests already booked.
          </p>
        </div>

      </div>
    </div>
  );
}
