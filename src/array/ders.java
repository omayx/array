package array;

import java.util.ArrayList;

public class ders {
	public static void main(String args[]) {

		int liste[] = { 5, 4, 6, 4, 5, 4, 10 };
		// System.out.println(liste[0]);
		// System.out.println(liste[2]);
		// liste2[2] = 1;
		// System.out.println(liste[2]);
		/// System.out.println(liste.length);
		// toplam = liste[0] + liste[1] + liste[2] + liste[3] + liste[4] + liste[5];

		int toplam = 0;
		for (int i = 0; i < liste.length; i++) {

			toplam = liste[i] + toplam;

		}

		System.out.println(toplam);

		// -----------------------------------------------------------------------------------------------------------------------------//

		float ortalama;
		ortalama = (float) toplam / liste.length;

		System.out.println(ortalama);

		// ------------------------------------------------------------------------------------------------------------------------------//

		int enBuyuk = enBuyuguBul(liste);

		System.out.println("en büyük= " + enBuyuk);
		int enKucuk = enKucuguBul(liste);

		System.out.println("enKucuguBul= " + enKucuk);

	}

	public static int enBuyuguBul(int liste[]) {
		if (liste.length == 0) {
			System.out.println("ben aslında yoğum");
			return -1;
		}

		int enBuyuk = liste[0];

		for (int i = 0; i < liste.length; ++i) {

			if (liste[i] > enBuyuk) {

				enBuyuk = liste[i]; // en buyugun ıcıne lısteyı atadık

			} // süslü horozlar çöplük . Her horoz kendı coplugunde oter yanı :D

		}

		return enBuyuk;
	}

	private int[] liste;

	// ----------------------------------------------------------------------------------------------------------------------------------------//

	public static int enKucuguBul(int liste[]) {
		if (liste.length == 0) {
			System.out.println("bole bısey yok");
			return -1;

		}

		int enKucuk = liste[0];

		for (int i = 0; i < liste.length; i++) {

			if (liste[i] < enKucuk) {

				enKucuk = liste[i];
			}

		}
		return enKucuk;
	}

}
