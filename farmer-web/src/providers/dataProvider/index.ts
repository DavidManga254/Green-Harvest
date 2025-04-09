import { DataProvider } from "@refinedev/core";
import AxiosApi from "../../api";

const dataProvider: DataProvider = {
    getList: async ({ resource, pagination, filters, sorters, meta }) => {
        const { current = 1, pageSize = 20 } = pagination ?? {};
        const response = await AxiosApi.get(`/farmer/${resource}`, {
            params: {
                page: current,
                perPage: pageSize,
                filters,
                sorters,
                meta,
            },
        });

        return {
            data: response.data.data,
            total: response.data.total,
        };
    },
};

export default dataProvider;
