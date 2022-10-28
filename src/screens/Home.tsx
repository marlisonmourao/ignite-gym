import { useState } from "react"
import { HStack, VStack, FlatList } from "native-base";

import { HomeHeader } from "@components/HomeHeader";
import { Group } from "@components/Group";

export function Home() {
  const [groups, setGroups] = useState(['costa', 'ombro', 'perna', 'braços']);
  const [groupSelected, setGroupSelected] = useState('costa');

  return(
    <VStack flex={1}> 
      <HomeHeader />

      <HStack>

      </HStack>
        <FlatList 
          data={groups}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Group 
              name={item} 
              isActive={groupSelected === item}
              onPress={() => setGroupSelected(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          _contentContainerStyle={{ px: 8}}
          my={10}
          maxH={10}
        />

    </VStack>
  )
}