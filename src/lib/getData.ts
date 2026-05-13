import dbConnect from "./dbConnect";

export const getData = async (model: any, query?: string) => {
  await dbConnect();
  const data = query ? await model.find({ pageName: query }).lean() : await model.find().lean();
  return JSON.parse(JSON.stringify(data));
};