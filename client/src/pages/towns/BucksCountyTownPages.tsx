import BucksCountyTownPage from "@/components/BucksCountyTownPage";

// Template function to create Bucks County town-specific pages
export const createBucksCountyTownPage = (townName: string, townType: string) => {
  return function TownSpecificPage() {
    return <BucksCountyTownPage townName={townName} townType={townType} />;
  };
};

// Borough Pages
export const BristolPage = createBucksCountyTownPage("Bristol", "Borough");
export const ChalfontPage = createBucksCountyTownPage("Chalfont", "Borough");
export const DoylestownPage = createBucksCountyTownPage("Doylestown", "Borough");
export const DublinPage = createBucksCountyTownPage("Dublin", "Borough");
export const HulmevillePage = createBucksCountyTownPage("Hulmeville", "Borough");
export const IvylandPage = createBucksCountyTownPage("Ivyland", "Borough");
export const LanghornePage = createBucksCountyTownPage("Langhorne", "Borough");
export const LanghorneManorPage = createBucksCountyTownPage("Langhorne Manor", "Borough");
export const MorrisvillePage = createBucksCountyTownPage("Morrisville", "Borough");
export const NewBritainPage = createBucksCountyTownPage("New Britain", "Borough");
export const NewHopePage = createBucksCountyTownPage("New Hope", "Borough");
export const NewtownPage = createBucksCountyTownPage("Newtown", "Borough");
export const PenndelPage = createBucksCountyTownPage("Penndel", "Borough");
export const PerkasiePage = createBucksCountyTownPage("Perkasie", "Borough");
export const QuakertownPage = createBucksCountyTownPage("Quakertown", "Borough");
export const RichlandtownPage = createBucksCountyTownPage("Richlandtown", "Borough");
export const RiegelsvillePage = createBucksCountyTownPage("Riegelsville", "Borough");
export const SellersvillePage = createBucksCountyTownPage("Sellersville", "Borough");
export const SilverdalePage = createBucksCountyTownPage("Silverdale", "Borough");
export const TelfordPage = createBucksCountyTownPage("Telford", "Borough");
export const TrumbauersvillePage = createBucksCountyTownPage("Trumbauersville", "Borough");
export const TullytownPage = createBucksCountyTownPage("Tullytown", "Borough");
export const YardleyPage = createBucksCountyTownPage("Yardley", "Borough");
export const HatboroPage = createBucksCountyTownPage("Hatboro", "Borough");
export const SoudertonPage = createBucksCountyTownPage("Souderton", "Borough");

// Township Pages
export const BedminsterTownshipPage = createBucksCountyTownPage("Bedminster", "Township");
export const BensalemTownshipPage = createBucksCountyTownPage("Bensalem", "Township");
export const BridgetonTownshipPage = createBucksCountyTownPage("Bridgeton", "Township");
export const BristolTownshipPage = createBucksCountyTownPage("Bristol", "Township");
export const BuckinghamTownshipPage = createBucksCountyTownPage("Buckingham", "Township");
export const DoylestownTownshipPage = createBucksCountyTownPage("Doylestown", "Township");
export const DurhamTownshipPage = createBucksCountyTownPage("Durham", "Township");
export const EastRockhillTownshipPage = createBucksCountyTownPage("East Rockhill", "Township");
export const FallsTownshipPage = createBucksCountyTownPage("Falls", "Township");
export const HaycockTownshipPage = createBucksCountyTownPage("Haycock", "Township");
export const HilltownTownshipPage = createBucksCountyTownPage("Hilltown", "Township");
export const LowerMakefieldTownshipPage = createBucksCountyTownPage("Lower Makefield", "Township");
export const LowerSouthamptonTownshipPage = createBucksCountyTownPage("Lower Southampton", "Township");
export const MiddletownTownshipPage = createBucksCountyTownPage("Middletown", "Township");
export const MilfordTownshipPage = createBucksCountyTownPage("Milford", "Township");
export const NewBritainTownshipPage = createBucksCountyTownPage("New Britain", "Township");
export const NewtownTownshipPage = createBucksCountyTownPage("Newtown", "Township");
export const NockamixonTownshipPage = createBucksCountyTownPage("Nockamixon", "Township");
export const NorthamptonTownshipPage = createBucksCountyTownPage("Northampton", "Township");
export const PlumsteadTownshipPage = createBucksCountyTownPage("Plumstead", "Township");
export const RichlandTownshipPage = createBucksCountyTownPage("Richland", "Township");
export const SoleburyTownshipPage = createBucksCountyTownPage("Solebury", "Township");
export const SpringfieldTownshipPage = createBucksCountyTownPage("Springfield", "Township");
export const TinicumTownshipPage = createBucksCountyTownPage("Tinicum", "Township");
export const UpperMakefieldTownshipPage = createBucksCountyTownPage("Upper Makefield", "Township");
export const UpperSouthamptonTownshipPage = createBucksCountyTownPage("Upper Southampton", "Township");
export const WarminsterTownshipPage = createBucksCountyTownPage("Warminster", "Township");
export const WarringtonTownshipPage = createBucksCountyTownPage("Warrington", "Township");
export const WarwickTownshipPage = createBucksCountyTownPage("Warwick", "Township");
export const WestRockhillTownshipPage = createBucksCountyTownPage("West Rockhill", "Township");
export const WrightstownTownshipPage = createBucksCountyTownPage("Wrightstown", "Township");