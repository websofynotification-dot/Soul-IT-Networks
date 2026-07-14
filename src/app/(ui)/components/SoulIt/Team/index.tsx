import { getData } from "@/lib/getData";
import Team from "@/models/admin-model/SoulIt/Team";
import { TeamMember } from "./TeamMember";

export const Teams = async () => {
  const teamData = await getData(Team);

  return (
    <div className="mt-10">
      <div className="text-center container" data-aos="fade-up">
        <h1 className="text-3xl md:text-[40px] font-bold leading-tight uppercase text-MidnightNavyText">
          Meet Our <span className="text-secondary">Expert Team</span>
        </h1>
        <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
          Meet the experienced professionals driving innovation, excellence, and
          customer success.
        </p>
      </div>
      <TeamMember teamsData={teamData}/>
    </div>
  );
};
