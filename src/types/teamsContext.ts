export interface teams {
  _id?: string;
  name: string;
  designation: string;
  description: string;
  image: string;
  image_public_Id?: string | null;
  socialMedia: {
    socialMediaType: string;
    socialMediaUrl: string;
    _id?: string;
  }[];
}

export interface teamsProps {
  teamsData: teams[];
}
