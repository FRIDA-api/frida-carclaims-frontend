import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router';

export default function DisclaimerPage() {
  const navigate = useNavigate();
  return (
    <Container className="my-5">
      <div className="my-3">
        <Typography variant="h3">Belehrung</Typography>
        <Typography variant="body1">
          Wir sind verpflichtet, Sie auf folgende Belehrung aufmerksam zu
          machen: <br></br>
          Um der seit dem 1. Januar 2008 geltenden Reform des
          Versicherungsvertragsgesetzes (VVG) zu entsprechen, sind wir nach § 28
          VVG dazu verpflichtet, Sie zunächst auf die Punkte Auskunfts- und
          Aufklärungsobliegenheitenì und Leistungsfreiheit aufmerksam zu machen.
          Der Inhalt der folgenden Belehrungen ist durch das VVG vorgegeben.
        </Typography>
        <Typography variant="body1">
          <b>Auskunfts- und Aufklärungsobliegenheiten </b> <br />
          Aufgrund der mit Ihnen getroffenen vertraglichen Vereinbarungen können
          wir von Ihnen nach Eintritt des Versicherungsfalls verlangen, dass Sie
          uns jede Auskunft erteilen, die zur Feststellung des
          Versicherungsfalls oder des Umfangs unserer Leistungspflicht
          erforderlich ist (Auskunftsobliegenheit) und uns die sachgerechte
          Prüfung unserer Leistungspflicht insoweit ermöglichen, als Sie uns
          alle Angaben machen, die zur Aufklärung des Tatbestands dienlich sind
          (Aufklärungsobliegenheit). <br /> Wir können ebenfalls verlangen, dass
          Sie uns Belege zur Verfügung stellen, soweit es Ihnen zugemutet werden
          kann.
        </Typography>
        <Typography variant="body1">
          <b>Leistungsfreiheit </b> <br />
          Machen Sie uns entgegen der vertraglichen Vereinbarungen vors‰tzlich
          keine oder nicht wahrheitsgem‰fle Angaben oder stellen Sie uns
          vors‰tzlich verlangte Belege nicht zur Verfügung, verlieren Sie Ihren
          Anspruch auf die Versicherungsleistung. Verstoflen Sie grob fahrl‰ssig
          gegen diese Obliegenheiten, verlieren Sie Ihren Anspruch zwar nicht
          vollständig, aber wir können unsere Leistung im Verhältnis zur Schwere
          Ihres Verschuldens kürzen. Eine Kürzung erfolgt nicht, wenn Sie
          nachweisen, dass Sie die Obliegenheit nicht grob fahrl‰ssig verletzt
          haben. Trotz Verletzung Ihrer Obliegenheiten zur Auskunft, zur
          Aufklärung oder zur Beschaffung von Belegen bleiben wir jedoch
          insoweit zur Leistung verpflichtet, als Sie nachweisen, dass die
          vorsätzliche oder grob fahrlässige Obliegenheitsverletzung weder für
          die Feststellung des Versicherungsfalls noch für die Feststellung oder
          den Umfang unserer Leistungspflicht urs‰chlich war. Verletzen Sie die
          Obliegenheit zur Auskunft, zur Aufklärung oder zur Beschaffung von
          Belegen arglistig, werden wir in jedem Fall von unserer Verpflichtung
          zur Leistung frei.
        </Typography>
        <Typography variant="body1">
          <b>Hinweis: </b> <br />
          Wenn das Recht auf die vertragliche Leistung nicht Ihnen, sondern
          einem Dritten zusteht, ist auch dieser zur Auskunft, zur Aufklärung
          oder zur Beschaffung von Belegen verpflichtet.
        </Typography>
        <Typography variant="body1">
          <b>Versicherungsombudsmann</b> <br />
          Der Versicherungsombudsmann ist eine unabh‰ngige und für den
          Verbraucher kostenfrei arbeitende, anerkannte
          Verbraucherschlichtungsstelle. Als Mitglied verpflichten wir uns,
          unsere Kunden über die Möglichkeit eines Schlichtungsverfahrens zu
          informieren. Die Kontaktdaten sind: <br />
          Versicherungsombudsmann e.V.
          <br />
          Postfach 080632
          <br />
          10006 Berlin
          <br />
          E-Mail: beschwerde@versicherungsombudsmann.de Tel: 0800/3696000
          (kostenlos aus deutschen Telefonnetzen) <br />
          Fax: 0800/3699000 (kostenlos aus deutschen Telefonnetzen) <br />
          Weitere Informationen unter www.versicherungsombudsmann.de
        </Typography>
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/accident')}
      >
        Weiter
      </Button>
    </Container>
  );
}
