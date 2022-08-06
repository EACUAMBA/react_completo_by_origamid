import React from 'react';
import useFetch from "../../../hooks/useFetch";
import {STATS_GET} from "../../../api";
import Loading from "../../../components/helper/Loading";
import Error from "../../../components/helper/Error";
const UserStatsGraphs = React.lazy(()=> import("../../../components/UserStatsGraphs")) ;

const UserStats = () => {
    const {request, error, loading, data} = useFetch();

    React.useEffect(() => {
        async function fetchStats() {
            const {url, options} = STATS_GET();
            const {response} = await request(url, options);
            if (response && response.ok) {
                console.log('Executou')
                console.log(data)
            }
        }

        fetchStats()
    }, [request])

    if (loading) return <Loading/>
    if (error) return <Error error={error}/>
    if (data)
        return (
            <div>
               <React.Suspense fallback={<p>Conecte-se a internet faz favor.</p>}>
                   <UserStatsGraphs data={data} />
               </React.Suspense>
            </div>
        );
};

export default UserStats;
