// home page apis

import server from "@plug/axios";

export const homeData = () => server.get("/mock/15/api/app/home/data");
