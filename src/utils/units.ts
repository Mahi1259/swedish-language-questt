export type Unit = {
  unitNumber: number;
  description: string;
  backgroundColor: `bg-${string}`;
  textColor: `text-${string}`;
  borderColor: `border-${string}`;
  tiles: Tile[];
};

export type Tile =
  | {
      type: "star" | "dumbbell" | "book" | "trophy" | "fast-forward";
      description: string;
      id: number;
    }
  | { type: "treasure"; id: 1 };

export type TileType = Tile["type"];

export const units: readonly Unit[] = [
  {
    unitNumber: 1,
    description: "Basic Phrases",
    backgroundColor: "bg-gray-400",
    textColor: "text-[#58cc02]",
    borderColor: "border-gray-500", // Set border color to black
    tiles: [
      {
        type: "star",
        description: "lesson",
        id: 1,
      },
    ],
  },
  {
    unitNumber: 2,
    description: "Food and Drinks",
    backgroundColor: "bg-gray-400",
    textColor: "text-[#ce82ff]",
    borderColor: "border-gray-500", // Set border color to black
    tiles: [
      { type: "book", description: "lesson", id: 1 },
    ],
  },
  {
    unitNumber: 3,
    description: "Travel and Directions",
    backgroundColor: "bg-gray-400",
    textColor: "text-[#00cd9c]",
    borderColor: "border-gray-500", // Set border color to black
    tiles: [
      { type: "dumbbell", description: "lesson", id: 1 },
    ],
  },
  {
    unitNumber: 4,
    description: "Everyday Activities",
    backgroundColor: "bg-gray-400",
    textColor: "text-[#00cd9c]",
    borderColor: "border-gray-500", // Set border color to black
    tiles: [
      { type: "trophy", description: "lesson", id: 1 },
    ],
  },
];
