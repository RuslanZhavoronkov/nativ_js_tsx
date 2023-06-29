
export type AddressType ={
    number: number
    street:StreetType
}

export type StreetType = {
    title: string
}

export type HouseType = {
    buildedAt: number,
    repaired: boolean,
    address: AddressType
}




export type CityType = {
  title: string;
  houses: Array<HouseType>;
  govermentBuildings: Array<string>;
  citizensNumber: number;
};
