import React from 'react'

import { View, Text } from 'react-native'

type Props = {
  description: string
}

export function TestHeader({ description }: Props) {
  return (
    <View>
      <Text>{description}</Text>
    </View>
  )
}
