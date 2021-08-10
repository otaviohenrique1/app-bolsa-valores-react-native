import React, { useState } from 'react';
import { useEffect } from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";

interface BotaoFavoritoProps {
  onPress?: ((event: GestureResponderEvent) => void);
  favoritado?: boolean;
}

export function BotaoFavorito(props: BotaoFavoritoProps) {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (props.favoritado) {
      setIsActive(props.favoritado);
    }
  }, []);

  return (
    <TouchableOpacity
      onPress={props.onPress}
    >
      <AntDesign
        onPress={() => setIsActive(!isActive)}
        name={(isActive) ? "star" : "staro"}
        size={40}
      />
    </TouchableOpacity>
  );
}