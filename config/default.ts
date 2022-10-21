export default {
  port: Number(process.env.HTTP_PORT),
  connectionString: process.env.MONGO_URI,
};
