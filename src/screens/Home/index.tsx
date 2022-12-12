import { FC } from 'react';
import { FlatList, Text, View } from 'react-native';

import { styles } from './styles';
import { Button } from './Button';
import { JustItBanner } from './JustItBanner';

const separatorComponent = () => <View style={styles.separator} />;
const renderItem = () => <Button focus={true} />;

const Home: FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.sectionText}>Ares-condicionados</Text>

        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={renderItem}
          ItemSeparatorComponent={separatorComponent}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={styles.flatList}
        />
      </View>

      <JustItBanner />
    </View>
  );
};

export { Home };
