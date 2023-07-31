import { Comics } from 'comics-api'
import { apiRoutes } from '@/utils/apiRoutes';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const reqPath = (event.context.params?.path) ||'';
  const route = apiRoutes.find(r => reqPath.includes(r.path));
  console.log(route)
  if (!route) {
    return {
      code: 404,
      message: "Not found"
    }
  }
  const identify = route.identify
  const page = query.page || 1;

  if (identify === -2) {
    const id = reqPath.split('/')[1];
    // @ts-ignore
    return await Comics[route.method](id, page);
  }else
  if (identify === -1) {
    const q = query.q;
    // @ts-ignore
    return await Comics[route.method](q, page);
  }else

  if (identify === 0) {
    // @ts-ignore
    return await Comics[route.method]();
  } else if (identify === 1) {
    // @ts-ignore
    return await Comics[route.method](page);
  }
   else if (identify === 2) {
  const status = query.status || 'all';
    // @ts-ignore
    return await Comics[route.method](status, page);
  }
  else if (identify === 3) {
      const [_, comicId] = reqPath.split('/');
    // @ts-ignore
    return await Comics[route.method](comicId, page);
  }
  else if (identify === 4) {
      const [_, comicId, __,chapterId] = reqPath.split('/');
    // @ts-ignore
    return await Comics[route.method](comicId, chapterId);
  }
});
