import { useState } from "react"
import { Heading, VStack, SectionList, Text } from "native-base";

import { ScreenHeader } from "@components/ScreenHeader";
import { HistoryCard } from "@components/HistoryCard";

export function History() {
  const [exercices, setExercices] = useState([
    {
      title: "26.07.22",
      data: ["Puxada frontal", "Remada unilateral"]
    },
    {
      title: "27.07.22",
      data: ["Puxada frontal"]
    }
  ])

  return(
    <VStack flex={1}> 
     <ScreenHeader title="Hístorico de Exercício" />

     <SectionList 
        sections={exercices}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <HistoryCard />
        )}
        renderSectionHeader={({ section }) => (
          <Heading color="gray.200" fontSize="md" mt={10} mb={3}>
            {section.title}
          </Heading>
        )}
        px={7}
        contentContainerStyle={exercices.length === 0 && { flex: 1, justifyContent: "center" }}
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign="center">
            Não há exercícios registrados ainda. {'\n'}
            Vamos fazer exercícios hoje ?
          </Text>
        )}
     />

    </VStack>
  )
}