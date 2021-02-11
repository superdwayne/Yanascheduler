let Server;



if (process.env.NODE_ENV === "production") {
  Server = "https://yana-scheduler.herokuapp.com/api/people";
} else {
  Server = "http://localhost:8080/";
}
export default Server;  