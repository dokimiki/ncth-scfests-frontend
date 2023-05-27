import axios from "axios";
import aspida from "@aspida/axios";
import api from "api/$api";

(async () => {
    const axiosConfig = { timeout: 3000 };
    const client = api(aspida(axios, axiosConfig));
    const res = await client.hello.get();

    console.log(res.body.message);
})();

const Index = () => {
    return (
        <div>
            <h1>Index Page</h1>
        </div>
    );
};

export default Index;
