let Server;
if (process.env.NODE_ENV === "production") {
  Server = "https://yana-scheduler.herokuapp.com/api/people";
} else {
  Server = "https://farfetch-cors.herokuapp.com/https://yana-scheduler.herokuapp.com/api/people";
}
export default Server;  