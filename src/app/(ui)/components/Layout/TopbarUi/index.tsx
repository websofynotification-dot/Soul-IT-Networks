import { getData } from "@/lib/getData";
import Topbar from "@/models/admin-model/Topbar";
import { TopbarUi } from "./TopbarUi";
export const dynamic = 'force-dynamic';

export const Topbars = async () => {
    const data = await getData(Topbar);
    return <TopbarUi topbarData={data} />
}
