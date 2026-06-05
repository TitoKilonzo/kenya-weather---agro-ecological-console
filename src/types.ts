export interface WeatherForecastDay {
  date: string;
  tempDay: number;
  tempNight: number;
  condition: string;
  description: string;
  humidity: number;
  windSpeed: number;
}

export interface ForestryIndices {
  soilMoistureStatus: string; // e.g. "Optimal", "Dry", "Saturated"
  evapotranspirationIndex: string; // e.g. "Moderate (3.2mm/day)"
  treeWateringWarning: string; // e.g. "High water demand! Target deep-root watering."
  canopyStressLevel: string; // e.g. "Low Stress"
  suitablePlantingConditions: boolean;
}

export interface WeatherData {
  city: string;
  temp: number;
  feelsLike: number;
  condition: string; // e.g. "Rain", "Clear", "Sunny", "Cloudy", "Snow"
  description: string;
  humidity: number;
  windSpeed: number;
  windDir?: string;
  uvIndex?: number;
  pressure?: number;
  visibility?: number;
  precipitationProbability?: number;
  forecast?: WeatherForecastDay[];
  forestry?: ForestryIndices;
}

export interface AIAdvisory {
  summary: string;
  outdoorActivities: string[];
  travelWarnings: string[];
  forestryAdvice: string[];
  recommendedOutfits: string[];
}
