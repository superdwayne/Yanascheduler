let Server;
if (process.env.NODE_ENV === "development") {
  Server = "https://yana-scheduler.herokuapp.com/api/people";
} else {
  Server = "http://localhost:8080/api/people";
}
export default Server;  