export const useFetchData = async (path: string): Promise<any> => {
  try {
    const config = useRuntimeConfig();
    const baseURL = config.public.baseURL as string;
    const { data } = await useFetch(`${path}`, {
      method: 'GET',
      cache: 'default',
      baseURL,
    });
    return data.value;
  } catch (err) {
    console.log(err);
  }
};
