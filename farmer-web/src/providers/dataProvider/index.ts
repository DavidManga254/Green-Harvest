import { DataProvider } from "@refinedev/core";
import AxiosApi from "../../api";

const dataProvider: DataProvider = {
    getList: async ({ resource, pagination, filters, sorters, meta }) => {
        console.log("getList CALLED with resource:", resource);

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

        const data = response.data.data;
        const total = response.data.total ?? data.length;

        return {
            data,
            total,
        };
    },
    create: async ({ resource, variables, meta }) => {
        const response = await AxiosApi.post(
            `/farmer/${resource}/create`,
            variables,
            {
                params: meta,
            }
        );

        return {
            data: response.data.data,
        };
    },

    getOne: async ({ resource, id, meta }) => {
        const response = await AxiosApi.get(`/farmer/${resource}/show/${id}`, {
            params: meta,
        });

        return {
            data: response.data.data,
        };
    },
    update: async ({ resource, id, variables, meta }) => {
        const response = await AxiosApi.put(
            `/farmer/${resource}/update/${id}`,
            variables,
            {
                params: meta,
            }
        );

        return {
            data: response.data.data,
        };
    },
    deleteOne: async ({ resource, id, meta }) => {
        const response = await AxiosApi.delete(
            `/farmer/${resource}/delete/${id}`,
            {
                params: meta,
            }
        );

        return {
            data: response.data,
        };
    },
};

export default dataProvider;
