import CustomBottomSheet from '@/src/shared/components/bottom-sheet/bottom-sheet';
import FloatingButton from '@/src/shared/components/ui/button/FloatingButton';
import { useState, useRef } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function VisitaScreen() {
  const [inputValue, setInputValue] = useState('');
  const bottomSheetRef = useRef<any>(null);

  const openBottomSheet = () => {
    bottomSheetRef.current?.snapToIndex(0);
  };

  const handleVincular = () => {
    // Aquí iría la lógica para vincular
    console.log('Vincular:', inputValue);
    setInputValue('');
    bottomSheetRef.current?.close();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listado de Visitas</Text>
      {/* Aquí iría el listado de visitas */}
      <View style={styles.emptyList}>
        <Text style={styles.emptyText}>No hay visitas disponibles</Text>
      </View>

      {/* Botón para abrir el bottom sheet */}
      <FloatingButton onPress={openBottomSheet} />

      {/* Bottom Sheet */}
      <CustomBottomSheet ref={bottomSheetRef} initialSnapPoints={['40%']}>
        <View style={styles.bottomSheetContent}>
          <Text style={styles.bottomSheetTitle}>Vincular Visita</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese código de visita"
            value={inputValue}
            onChangeText={setInputValue}
          />
          <TouchableOpacity style={styles.vincularButton} onPress={handleVincular}>
            <Text style={styles.vincularButtonText}>Vincular</Text>
          </TouchableOpacity>
        </View>
      </CustomBottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
  },
  fabButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#007bff',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  bottomSheetContent: {
    padding: 16,
  },
  bottomSheetTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  vincularButton: {
    backgroundColor: '#007bff',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  vincularButtonText: {
    color: '#fff', // changed 'white' to '#fff'
    fontWeight: 'bold',
    fontSize: 16,
  },
});
