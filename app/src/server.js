let Server;

if (process.env.NODE_ENV === "production") {
  Server = "https://yana-scheduler.herokuapp.com/api/";
} else {
  Server = "http://localhost:8000/api/";
}
export default Server;  