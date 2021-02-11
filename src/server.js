let Server;

if (process.env.NODE_ENV === "production") {
  Server = "https://yana-scheduler.herokuapp.com/";
} else {
  Server = "http://localhost:8000/";
}
export default Server;  