"use client";

import { createContext, useContext, useState } from "react";

export type Service = {
	key: string;
	name: string;
	note: string;
	attach: number;
	price: number;
	maxPrice: number;
};

export const INITIAL_ADR = 2_000_000;

export const INITIAL_SERVICES: Service[] = [
	{
		key: "spa",
		name: "Spa",
		note: "Balinese massage 60, 90 min",
		attach: 0,
		price: 450_000,
		maxPrice: 2_500_000,
	},
	{
		key: "restaurant",
		name: "Restaurant",
		note: "Dinner per guest",
		attach: 0,
		price: 400_000,
		maxPrice: 1_700_000,
	},
	{
		key: "breakfast",
		name: "Breakfast",
		note: "À la carte breakfast upsell",
		attach: 0,
		price: 250_000,
		maxPrice: 700_000,
	},
	{
		key: "bar",
		name: "Bar",
		note: "Drinks & poolside",
		attach: 0,
		price: 300_000,
		maxPrice: 1_000_000,
	},
	{
		key: "yoga",
		name: "Yoga class",
		note: "Guided session in the rice fields",
		attach: 0,
		price: 300_000,
		maxPrice: 850_000,
	},
	{
		key: "sauna",
		name: "Guided sauna",
		note: "Aufguss ritual with instructor",
		attach: 0,
		price: 700_000,
		maxPrice: 1_700_000,
	},
	{
		key: "sound",
		name: "Sound healing",
		note: "Gong & singing bowl ceremony",
		attach: 0,
		price: 600_000,
		maxPrice: 1_700_000,
	},
	{
		key: "cooking",
		name: "Cooking class",
		note: "Traditional Balinese cooking",
		attach: 0,
		price: 800_000,
		maxPrice: 2_500_000,
	},
];

type RoiContextType = {
	adr: number;
	setAdr: (v: number) => void;
	totalRooms: number;
	setTotalRooms: (v: number) => void;
	occupancy: number;
	setOccupancy: (v: number) => void;
	services: Service[];
	updateService: (i: number, patch: Partial<Service>) => void;
	reset: () => void;
};

const RoiContext = createContext<RoiContextType | null>(null);

export function RoiProvider({ children }: { children: React.ReactNode }) {
	const [adr, setAdr] = useState(INITIAL_ADR);
	const [totalRooms, setTotalRooms] = useState(30);
	const [occupancy, setOccupancy] = useState(70);
	const [services, setServices] = useState(INITIAL_SERVICES);

	const updateService = (i: number, patch: Partial<Service>) => {
		setServices((prev) =>
			prev.map((s, idx) => (idx === i ? { ...s, ...patch } : s)),
		);
	};

	const reset = () => {
		setAdr(INITIAL_ADR);
		setTotalRooms(30);
		setOccupancy(70);
		setServices(INITIAL_SERVICES);
	};

	return (
		<RoiContext.Provider
			value={{
				adr,
				setAdr,
				totalRooms,
				setTotalRooms,
				occupancy,
				setOccupancy,
				services,
				updateService,
				reset,
			}}
		>
			{children}
		</RoiContext.Provider>
	);
}

export function useRoi() {
	const ctx = useContext(RoiContext);
	if (!ctx) throw new Error("useRoi must be used within RoiProvider");
	return ctx;
}
