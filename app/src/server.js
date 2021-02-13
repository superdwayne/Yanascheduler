let Server;

if (process.env.NODE_ENV === "production") {
  Server = "https://yana-scheduler.herokuapp.com/api/people";
} else {
  Server = "http://localhost:8000/api/people";
}
export default Server;  