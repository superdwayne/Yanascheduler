let Server;

if (process.env.NODE_ENV === "production") {
  Server = "https://yana-scheduler.herokuapp.com/";
} else {
  Server = "https://yana-scheduler.herokuapp.com/";
}
export default Server;  