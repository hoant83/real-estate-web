import http from "./https";

export type User = {
  email: string;
  fullName: string;
  phone: string;
  password: string;
  place: string;
};

export type updateUser = {
  email: string;
  fullName: string;
  phone: string;
  place: string;
  idEstate: number;
};

//sign up
export const createNewUser = async (user: User) => {
  const result = await http.post<User>("/user/signup", user);
  console.log(result);
  console.log(result.data);
  return result;
};

//sign in
export const signinUser = async (signin: any) => {
  const result = await http.post<any>("/user/signin", signin);
  console.log(result);
  console.log(result.data);
  return result;
};

//check access token
export const checkAccessToken = async () => {
  const result = await http.get<any>("/user/accesstoken/check");
  return result.data;
};

//get user by phone
export const getUserByPhone = async (phone: string) => {
  const result = await http.get<any>("/user/" + phone);
  return result;
};

// update user info
export const updateUserInfo = async (dto: updateUser, id: number) => {
  const result = await http.put<updateUser>("/user/update/" + id, dto);
  return result;
};
// get estate according type
export const getEstateByType = async (
  type: string,
  take: number,
  skip: number
) => {
  let result = null;
  if (type) {
    result = await http.get<any>(
      `/estate/?type=${type}&take=${take}&skip=${skip}`
    );
  }
  if (!type) {
    result = await http.get<any>(`/estate/?take=${take}&skip=${skip}`);
  }
  return result;
};
// get all estate (has filter)
export const getEstateByFilter = async (
  category: string,
  gerion: string,
  price: number,
  take: number,
  skip: number
) => {
  console.log(category, gerion, price, take, skip);
  let result: any;
  if (category === null && gerion !== null) {
    result = await http.get<any>(
      "/estate/filter/?" +
        "&gerion=" +
        gerion +
        "&price=" +
        price +
        "&take=" +
        take +
        "&skip=" +
        skip
    );
  } else if (category !== null && gerion === null) {
    result = await http.get<any>(
      "/estate/filter/?" +
        "category=" +
        category +
        "&price=" +
        price +
        "&take=" +
        take +
        "&skip=" +
        skip
    );
  } else if (category === null && gerion === null) {
    result = await http.get<any>(
      "/estate/filter/?" + "&price=" + price + "&take=" + take + "&skip=" + skip
    );
  } else {
    result = await http.get<any>(
      "/estate/filter/?" +
        "category=" +
        category +
        "&gerion=" +
        gerion +
        "&price=" +
        price +
        "&take=" +
        take +
        "&skip=" +
        skip
    );
  }

  return result;
};
