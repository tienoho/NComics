type Route = {
    path: string,
    method: string;
    identify: number;
}

export const apiRoutes :Route[]= [
    {
    path: "genres/",
    method: 'getComicsByGenre',
    identify: -2
},
    {
    path: "search-suggest",
    method: 'getSearchSuggest',
    identify: -1
}, 
    {
    path: "search",
    method: 'searchComics',
    identify: -1
}, 
    {
    path: "recommend-comics",
    method: 'getRecommendComics',
    identify: 0

},
{
    path: "genres",
    method: 'getGenres',
    identify: 0

},
    {
    path: "trending-comics",
    method: 'getTrendingComics',
    identify: 1
}, 
{
    path: "completed-comics",
    method: 'getCompletedComics',
    identify: 1

},

{
    path: "recent-update-comics",
    method: 'getRecentUpdateComics',
    identify: 1

},

{
    path: "boy-comics",
    method: 'getBoyComics',
    identify: 1

},
{
    path: "girl-comics",
    method: 'getGirlComics',
    identify: 1

},
{
    path: "new-comics",
    method: 'getNewComics',
    identify: 2
},
{
    path: "top",
    method: 'getTopAllComics',
    identify: 2
},

{
    path: "top/weekly",
    method: 'getTopWeeklyComics',
    identify: 2
},
{
    path: "top/monthly",
    method: 'getTopMonthlyComics',
    identify: 2
},
{
    path: "top/daily",
    method: 'getTopDailyComics',
    identify: 2
},
{
    path: "top/chapter",
    method: 'getTopChapterComics',
    identify: 2
},
{
    path: "top/follow",
    method: 'getTopFollowComics',
    identify: 2
},
{
    path: "top/comment",
    method: 'getTopCommentComics',
    identify: 2
},
{
    path: "chapters/",
    method: 'getChapter',
    identify: 4
},
{
    path: "comments",
    method: 'getComments',
    identify: 3
},
{
    path: "chapters",
    method: 'getChapters',
    identify: 3
},
{
    path: "comics/",
    method: 'getComicDetail',
    identify: 3
},

]