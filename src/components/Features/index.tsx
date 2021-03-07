import FeatureCard from "../FeatureCard";
import Text from "../Text";

export default function Features() {
    return (
        <div className="container-features">
            <div className="feature-title">
                <Text
                    text="Features"
                    fontSize="40px"
                    fontWeight="bold"
                    lineWeight="130%"
                    color="#212353"
                />
                <Text
                    text="Some of the features and advantages that we provide for those of you who store data in this Data Warehouse."
                    width="584px"
                    height="58px"
                    fontSize="18px"
                    fontWeight="normal"
                    lineWeight="160%"
                    color="#4B5D68"
                />
            </div>
            <div className="cards">
                <div >
                    <FeatureCard className="feature-card"
                        bgcolor="#68C9BA"
                        image="_search"
                        title="Search Data"
                        text="Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time."
                        link="#search"
                    />
                </div>
                <div>
                    <FeatureCard className="feature-card"
                        bgcolor="#9C69E2"
                        image="_access"
                        title="24 Hours Access"
                        text="Access is given 24 hours a full morning to night and
                    meet again in the morning, giving you comfort when
                    you need data when urgent."
                        link="#access"
                    />
                </div>
                <div >
                    <FeatureCard className="feature-card"
                        bgcolor="#F063B8"
                        image="_print"
                        title="Print Out"
                        text="Print out service gives you convenience if someday
                    you need print data, just edit it all and just print it."
                        link="#print"
                    />
                </div>
                <div>
                    <FeatureCard className="feature-card"
                        bgcolor="#2D9CDB"
                        image="_security"
                        title="Security Code"
                        text="Data Security is one of our best facilities. Allows for your files
                    to be safer. The file can be secured with a code or password that 
                    you created, so only you can open the file."
                        link="#security"
                    />
                </div>
            </div>
        </div>
    )
}