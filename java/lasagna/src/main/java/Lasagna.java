public class Lasagna {

		public int expectedMinutesInOven() {
			return 40;
		}		
		
		public int remainingMinutesInOven(int actualMinutesInOven) {
			return expectedMinutesInOven() - actualMinutesInOven; 
		}
		
		public int preparationTimeInMinutes(int numberOfLayers) {
			final int preparationTimeInMinutesPerLayer = 2;
			return numberOfLayers * preparationTimeInMinutesPerLayer;
		}
		
    	public int totalTimeInMinutes(int numberOfLayers, int actualMinutesInOven) {
    		return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
    	}
}