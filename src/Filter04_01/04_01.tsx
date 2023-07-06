// export const city = {
//   title: "New York",
//   houses: [
//     {
//       id: 1,
//       buildedAt: 2012,
//       repaired: false,
//       adress: {
//         number: 100,
//         street: { title: "White street" },
//       },
//     },
//     {
//       id: 2,
//       buildedAt: 2008,
//       repaired: false,
//       adress: {
//         number: 100,
//         street: { title: "Happy street" },
//       },
//     },
//     {
//       id: 3,
//       buildedAt: 2020,
//       repaired: false,
//       adress: {
//         number: 101,
//         street: { title: "White street" },
//       },
//     },
//   ],
//   governmentBuildings: [
//     {
//       type: "HOSPITAL",
//       address: {
//         street: {
//           title: "Central Str",
//         },
//         number: 12,
//       },
//       budget: 200000,
//       staffCount: 200,
//     },
//     {
//       type: "FIRE-STATION",
//       address: {
//         street: {
//           title: "South Str",
//         },
//         number: 12,
//       },
//       budget: 500000,
//       staffCount: 1000,
//     },
//   ],
//   citizensNumber: 1000000,
// };

// export type StreetType = {
//   title: string;
// };

// export type AddressType = {
//   number?: number;
//   street: StreetType;
// };

// export type HouseType = {
//   id?: number;
//   buildeAt: number;
//   repaired: boolean;
//   address: AddressType;
// };

// export type GovernmentBuildingType = {
//   type: "HOSPITAL" | "FIRE-STATION";
//   budget: number;
//   staffCount: number;
//   address: AddressType;
// };

// export type CityType = {
//   title: string;
//   houses: Array<HouseType>;
//   governmentBuildings: Array<GovernmentBuildingType>;
// };


// export function demolishHousesOnTheStreet (city:CityType, street:string) {
// city.houses = city.houses.filter(h => h.address.street.title !== street)
// }


// export const getBuildingsWithStaffCountGreaterThen = (buildings:Array<GovernmentBuildingType>, number: number) {
// return buildings.filter(b => b.staffCount > number )
// }