export type TypeRouters = {
  path: string;
  element: React.FC;
  exact?: boolean;
};

export type Point = {
  lng: number,
  lat: number,
  type: string,
  description: string
}
