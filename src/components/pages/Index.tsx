import aspida from "@aspida/axios";
import api from "api/$api";

(async () => {
    const client = api(aspida());
    const res = await client.get();

    console.log(res);
})();

const Index = () => {
    return (
        <div>
            <h1>Index Page</h1>
        </div>
    );
};

export default Index;
