interface Novel {
  id: string;
  title: string;
  kind: Novel.Kind;
  marker: Novel.Marker;
  progress: number;
  link?: string;
}

namespace Novel {
  export enum Kind {
    WebNovel = "Web Novel",
    LightNovel = "Light Novel"
  }

  export enum Marker {
    Volume = "Volume",
    Chapter = "Chapter"
  }
}

export default Novel;
