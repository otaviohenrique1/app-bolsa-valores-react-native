import React, { useState } from 'react';
import { useEffect } from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import Foundation from "react-native-vector-icons/Foundation";

interface BotaoProps {
  onPress?: ((event: GestureResponderEvent) => void);
}

interface BotaoFavoritoProps extends BotaoProps {
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

export function BotaoRemover(props: BotaoProps) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
    >
      <Foundation
        name={"trash"}
        size={40}
      />
    </TouchableOpacity>
  );
}