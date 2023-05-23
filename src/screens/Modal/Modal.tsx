import { Text, View } from 'react-native';

import { styles } from './styles';

export const ModalScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Introducing our innovative Pomodoro app that empowers you to take control of your time and boost productivity
        like never before. With our app, you can easily customize your time intervals, harness the power of autoplay,
        leverage vibration and sounds, and effortlessly track your productive sessions.
      </Text>

      <Text style={styles.text}>
        Set your own time intervals: Our app understands that everyone&apos;s work style is unique. That&apos;s why we
        offer the flexibility to tailor your time intervals according to your specific needs. Whether you prefer shorter
        bursts of focus or longer deep work sessions, our app allows you to set the perfect durations that align with
        your workflow.
      </Text>

      <Text style={styles.text}>
        Autoplay for uninterrupted workflow: Say goodbye to distractions and stay in the flow with our autoplay feature.
        Once you&apos;ve configured your desired time intervals, simply activate autoplay and let the app seamlessly
        transition between your work and break sessions. This way, you can maintain momentum without the need for
        constant manual adjustments.
      </Text>

      <Text style={styles.text}>
        Vibration and sounds for heightened awareness: Our app goes beyond visual cues by engaging multiple senses. With
        the option to enable vibration and sounds, you&apos;ll receive subtle yet effective reminders to switch between
        work and break sessions. These sensory prompts help you stay aware and focused, ensuring you make the most out
        of every productive minute.
      </Text>

      <Text style={styles.text}>
        Effortless session tracking: Tracking your progress is crucial for personal growth and accountability. Our app
        simplifies this process by automatically recording and presenting detailed statistics of your sessions. Gain
        insights into your productivity patterns, identify areas for improvement, and celebrate your accomplishments as
        you witness your productivity skyrocket.
      </Text>

      <Text style={styles.text}>
        Don&apos;t settle for average productivity—supercharge your work sessions with our customizable Pomodoro app.
        Experience the freedom to tailor your time intervals, enjoy uninterrupted focus with autoplay, stay aware with
        vibration and sounds, and track your progress effortlessly. Take the first step towards a more productive and
        fulfilling work routine today.
      </Text>
    </View>
  );
};
