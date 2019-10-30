public class AFCController extends GateInterface, PrepaidCardScreen,  CardScannerInterface, TravelingHistory, Station {

	private  CardScannerInterface  CardScannerInterface;

	private Ticket RecognierInterface ticket RecognierInterface;

	private Validate24HTicket validate24HTicket;

	private GateInterface gateInterface;

	private ComandLineScreen comandLineScreen;

	private TicketValidator ticketValidator;

	private Certificate certificate;

	private TravelingHistory travelingHistory;

	private Station station;

	public void validateBarcode(char barCode) {

	}

	public boolean checkBalance( PrepaidCard card) {
		return false;
	}

	public void caculateFare() {

	}

}
