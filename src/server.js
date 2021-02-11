let Server;

const env = process.env.NODE_ENV;
const config = {
    mode: env || 'production'
};

if (config === "production") {
  Server = "https://yana-scheduler.herokuapp.com/api/people";
} else {
  Server = "http://localhost:8080/api/people";
}
export default Server;  