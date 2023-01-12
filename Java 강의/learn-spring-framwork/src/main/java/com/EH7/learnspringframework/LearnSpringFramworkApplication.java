package com.EH7.learnspringframework;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import com.EH7.learnspringframework.game.GameRunner;

@SpringBootApplication
public class LearnSpringFramworkApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext context =
				SpringApplication.run(LearnSpringFramworkApplication.class, args);
		// MarioGame, GameRunner
		GameRunner runner = context.getBean(GameRunner.class);
		
//		MarioGame game = new MarioGame();
//		SuperContraGame game = new SuperContraGame();
//		GameRunner runner = new GameRunner(game);
		
		runner.runGame();
	}

}
