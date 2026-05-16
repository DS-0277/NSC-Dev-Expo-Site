import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export interface IndustryStatItem {
    value: string;
    description: string;
}

interface IndustryStatsProps {
    stats: IndustryStatItem[];
}

function renderStatValue(value: string) {
    const lastChar = value[value.length - 1];
    if (lastChar === '%' || lastChar === '+') {
        return (
            <Text style={styles.topText}>
                {value.slice(0, -1)}
                <Text style={styles.specialCharacter}>{lastChar}</Text>
            </Text>
        );
    }

    return <Text style={styles.topText}>{value}</Text>;
}

export default function IndustryStats ({ stats }: IndustryStatsProps) {
    return (
        <View style={styles.componentContainer}>
            <LinearGradient style={styles.gradientContainer}
            colors={['#1A1A1A','#808080']}
                start={{x:0, y:0.5}}
                end={{x:1,y:0.5}}>
                    <View style = {styles.topBanner}>
                        <Text style = {styles.bannerText}>Prepare for a high-demand field.</Text>
                    </View>
                    <View style = {styles.bottomContainer}>
                        {stats.map((stat) => (
                            <View style={styles.statsContainer} key={`${stat.value}-${stat.description}`}>
                                {renderStatValue(stat.value)}
                                <Text style={styles.bottomText}>{stat.description}</Text>
                            </View>
                        ))}
                    </View>
            </LinearGradient>

        </View>
    );
};

const styles = StyleSheet.create ({
    gradientContainer: {
        width: '100%',
        flex: 1,
        paddingHorizontal: 60,
    },
    componentContainer: {
        height: 320,
    },
    topBanner: {
        marginTop: 30,
    },
    bottomContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
    },
    statsContainer: {
        width: 159,
        height: 159,
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    bannerText: {
        fontFamily: 'Roboto',
        fontSize: 40,
        color: '#DBDBDB',
    },
    topText: {
        fontFamily: 'Inter',
        fontSize: 64,
        color: '#DBDBDB',
    },
    bottomText: {
        fontFamily: 'Inter',
        fontSize: 20,
        color: '#DBDBDB',
        textAlign: 'center',
    },
    specialCharacter: {
        fontFamily: 'Inter',
        fontSize: 48,
        color: '#DBDBDB',
    },
});