let Server;

const env = process.env.NODE_ENV;
const config = {
    mode: env || 'production'
};

if (config === "production") {
  Server = "https://yana-scheduler.herokuapp.com/api/people";
} else {
  Server = "https://yana-scheduler.herokuapp.com/api/people";
}
export default Server;  