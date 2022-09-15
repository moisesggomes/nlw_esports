import { useState, useEffect } from "react"
import { View, Image, FlatList } from "react-native"

import logoImg from "../../assets/logo-nlw-esports.png"

import { styles } from "./styles"

import { Heading } from "../../components/Heading"
import { GameCard, GameCardProps } from "../../components/GameCard"

import { GAMES } from "../../utils/games"

interface Game {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}

export function Home() {
  const [games, setGames] = useState<Game[]>([])



  useEffect(() => {
    fetch("http://10.0.0.106:3333")
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])

  return (
    <View style={styles.container}>
      <Image
        source={logoImg}
        style={styles.logo}
      />

      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        data={GAMES}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <GameCard data={item} />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
      />
    </View>
  )
}
